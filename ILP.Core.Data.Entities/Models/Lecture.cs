using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class Lecture : IEntity
    {
        [Key, Column("LectureId")]
        public string Id { get; set; } = null!;
        public string Name { get; set; } = string.Empty;
        [Required]
        public DateTime DateStart { get; set; }
        [Required]
        public DateTime DateEnd { get; set; }
        [Required]
        public string GroupId { get; set; } = null!;
        [JsonIgnore]
        public Group? Group { get; set; }
        public ICollection<User>? Users { get; }
        [JsonIgnore]
        public ICollection<VisitLecture>? VisitLectures { get; }
    }
}
